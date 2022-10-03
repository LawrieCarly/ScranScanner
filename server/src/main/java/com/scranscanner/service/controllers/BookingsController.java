package com.scranscanner.service.controllers;

import com.scranscanner.service.models.*;
import com.scranscanner.service.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookingsController {

    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    AvailabilityRepository availabilityRepository;

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> getAllBookings(){
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }

    // Show
    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity<Optional<Booking>> findBookingById(@PathVariable Long id){
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/bookings/customer/{id}")
    public ResponseEntity <List<Optional<Booking>>> findBookingByCustomer(@PathVariable Long id){
            return new ResponseEntity<>(bookingRepository.findByCustomerId(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bookings")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking){
        //saves booking to db
        bookingRepository.save(booking);

        // gets associated avail object from db
        Long availId = booking.getAvailability().getId();
        Availability availability = availabilityRepository.findById(availId).get();

        // updates avail to false then saves
        availability.setAvailable(false);
        availabilityRepository.save(availability);

        // returns booking
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @PutMapping(value = "/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking, @PathVariable Long id){
        return new ResponseEntity<>(bookingRepository.save(booking), HttpStatus.OK);
    }

    @DeleteMapping(value = "/bookings/{id}")
    public ResponseEntity<Long> deleteBooking(@PathVariable Long id){
        bookingRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}


