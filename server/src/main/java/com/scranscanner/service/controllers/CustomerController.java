package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Booking;
import com.scranscanner.service.models.Customer;
import com.scranscanner.service.models.Restaurant;
import com.scranscanner.service.repositories.BookingRepository;
import com.scranscanner.service.repositories.CustomerRepository;
import com.scranscanner.service.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    RestaurantRepository restaurantRepository;

    @GetMapping(value = "/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }

    // Show
    @GetMapping(value = "/customers/{id}")
    public ResponseEntity<Optional<Customer>> findCustomerById(@PathVariable Long id){
        return new ResponseEntity<>(customerRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/customers/byEmail/{email}")
    public ResponseEntity<Optional<Customer>> findCustomerByEmail(@PathVariable String email){
        return new ResponseEntity<>(customerRepository.findByEmail(email), HttpStatus.OK);
    }

    @PostMapping(value = "/customers")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer){
        return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.CREATED);
    }

    @PatchMapping(value = "/customers/{customerId}/restaurant/{restaurantId}")
    public ResponseEntity<Customer> addSavedRestaurant(@PathVariable(name = "customerId") Long customerId, @PathVariable(name = "restaurantId") Long restaurantId){
        Customer customer = customerRepository.findById(customerId).get();
        Restaurant restaurant = restaurantRepository.findById(restaurantId).get();

        customer.addSavedRestaurant(restaurant);
        customerRepository.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PutMapping(value = "/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer, @PathVariable Long id){
        return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.OK);
    }

    @DeleteMapping(value = "/customers/{id}")
    public ResponseEntity<Long> deleteCustomer(@PathVariable Long id){
        customerRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
