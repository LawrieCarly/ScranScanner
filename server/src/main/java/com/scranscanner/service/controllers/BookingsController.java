package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Booking;
import com.scranscanner.service.models.Restaurant;
import com.scranscanner.service.repositories.BookingRepository;
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

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> getAllBookings(){
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }

    // Show
    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity<Optional<Booking>> findBookingById(@PathVariable Long id){
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bookings")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking){
        return new ResponseEntity<>(bookingRepository.save(booking), HttpStatus.CREATED);
    }

    @PutMapping(value = "/booking/{id}")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking, @PathVariable Long id){
        return new ResponseEntity<>(bookingRepository.save(booking), HttpStatus.OK);
    }

    @DeleteMapping(value = "/booking/{id}")
    public ResponseEntity<Long> deleteBooking(@PathVariable Long id){
        bookingRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}


