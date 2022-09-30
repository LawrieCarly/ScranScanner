package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Restaurant;
import com.scranscanner.service.repositories.AvailabilityRepository;
import com.scranscanner.service.repositories.DinnerTableRepository;
import com.scranscanner.service.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class RestaurantController {

    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    DinnerTableRepository dinnerTableRepository;
    @Autowired
    AvailabilityRepository availabilityRepository;

    @GetMapping(value = "/restaurants")
    public ResponseEntity<List<Restaurant>> getAllRestaurants(){
        return new ResponseEntity<>(restaurantRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/restaurants/filtered")
    public ResponseEntity<List<Restaurant>> getFilteredRestaurants(@RequestParam(name="partySize") Integer partySize, @RequestParam(name="date") @DateTimeFormat(iso=DateTimeFormat.ISO.DATE) LocalDate date, @RequestParam(name="time") @DateTimeFormat(iso=DateTimeFormat.ISO.TIME) LocalTime time){
        return new ResponseEntity<>(restaurantRepository.findFilteredRestaurants(partySize, date, time), HttpStatus.OK);
    }

    // Show
    @GetMapping(value = "/restaurants/{id}")
    public ResponseEntity<Optional<Restaurant>> findRestaurantById(@PathVariable Long id){
        return new ResponseEntity<>(restaurantRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/restaurants")
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant){
        return new ResponseEntity<>(restaurantRepository.save(restaurant), HttpStatus.CREATED);
    }

    @PutMapping(value = "/restaurants/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@RequestBody Restaurant restaurant, @PathVariable Long id){
        return new ResponseEntity<>(restaurantRepository.save(restaurant), HttpStatus.OK);
    }

    @DeleteMapping(value = "/restaurants/{id}")
    public ResponseEntity<Long> deleteRestaurant(@PathVariable Long id){
        restaurantRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
