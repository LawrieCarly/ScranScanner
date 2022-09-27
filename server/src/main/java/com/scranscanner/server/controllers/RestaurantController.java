package com.scranscanner.server.controllers;

import com.scranscanner.server.models.Restaurant;
import com.scranscanner.server.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    RestaurantRepository restaurantRepository;

    @GetMapping(value = "/restaurants")
    public ResponseEntity<List<Restaurant>> getAllRestaurants(){
        return new ResponseEntity<>(restaurantRepository.findAll(), HttpStatus.OK);
    }
}
