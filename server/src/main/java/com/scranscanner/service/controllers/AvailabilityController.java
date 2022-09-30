package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.repositories.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
public class AvailabilityController {

    @Autowired
    AvailabilityRepository availabilityRepository;

    @GetMapping(value = "/availabilities/restaurant/{id}/filtered")
    public ResponseEntity<List<Availability>> getFilteredAvailability(@PathVariable Long id, @RequestParam(name="partySize") Integer partySize, @RequestParam(name="date") @DateTimeFormat(iso=DateTimeFormat.ISO.DATE) LocalDate date, @RequestParam(name="time") @DateTimeFormat(iso=DateTimeFormat.ISO.TIME) LocalTime time){
        return new ResponseEntity<>(availabilityRepository.findAvailableTablesByRestaurantNative(id, partySize, date, time), HttpStatus.OK);
    }

}