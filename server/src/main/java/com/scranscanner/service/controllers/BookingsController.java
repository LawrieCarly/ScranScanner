package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Booking;
import com.scranscanner.service.models.Customer;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Restaurant;
import com.scranscanner.service.repositories.BookingRepository;
import com.scranscanner.service.repositories.CustomerRepository;
import com.scranscanner.service.repositories.DinnerTableRepository;
import com.scranscanner.service.repositories.RestaurantRepository;
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
    CustomerRepository customerRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    DinnerTableRepository dinnerTableRepository;

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
        Customer customer = booking.getCustomer();
        customer.addBooking(booking);
        customerRepository.save(customer);
        Restaurant restaurant = booking.getRestaurant();
        restaurant.addBooking(booking);
        restaurantRepository.save(restaurant);
        DinnerTable dinnerTable = booking.getDinnerTable();
        dinnerTable.addBooking(booking);
        dinnerTableRepository.save(dinnerTable);
        return new ResponseEntity<>(bookingRepository.save(booking), HttpStatus.CREATED);
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


