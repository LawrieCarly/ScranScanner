package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Restaurant;
import com.scranscanner.service.repositories.AvailabilityRepository;
import com.scranscanner.service.repositories.DinnerTableRepository;
import com.scranscanner.service.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

//    @GetMapping(value = "/restaurants")
//    public ResponseEntity<List<Restaurant>> getAllRestaurants(@RequestParam(required = false, name = "partySize") Integer partySize){
//        if (partySize == null){
//            return new ResponseEntity<>(restaurantRepository.findAll(), HttpStatus.OK);
//        }
//
//        // setup list to return based on searches
//        ArrayList<Restaurant> restaurantsToReturn = new ArrayList<>();
//        // look at each parameter
//        List<DinnerTable> dinnerTables = dinnerTableRepository.findBySizeGreaterThanEqual(partySize);
//        // for each table
//        for (DinnerTable dinnerTable: dinnerTables){
//            // get rest
//            Restaurant restaurant = dinnerTable.getRestaurant();
//            // append to returning list
//            restaurantsToReturn.add(restaurant);
//        }
//        return new ResponseEntity<>(restaurantsToReturn, HttpStatus.OK);
//    }

    @GetMapping(value = "/restaurants/filtered")
    public ResponseEntity<List<Restaurant>> getFilteredRestaurants(){
        List<Restaurant> searchedRestaurants = new ArrayList<>();
        List<Restaurant> allRestaurants = restaurantRepository.findAll();
        for (Restaurant restaurant: allRestaurants){
            List<Availability> listOfAvailabilities = availabilityRepository.findByIsAvailableAndDinnerTablesRestaurantOrderByDateIgnoreCase(true, restaurant);
            if (listOfAvailabilities.size() != 0){
                restaurant.addSearchedAvailabilities(listOfAvailabilities);
                searchedRestaurants.add(restaurant);
            }
        }
        return new ResponseEntity<>(searchedRestaurants, HttpStatus.OK);
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
