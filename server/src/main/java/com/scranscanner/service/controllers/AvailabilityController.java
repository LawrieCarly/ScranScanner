package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.repositories.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AvailabilityController {

    @Autowired
    AvailabilityRepository availabilityRepository;

//    @GetMapping(value = "/availabilities/available")
//    public ResponseEntity<List<Availability>> findAvailableDinnerTable(){
//        return new ResponseEntity<>(availabilityRepository.findByIsAvailableOrderByDate(true), HttpStatus.OK);
//    }

}
