package com.scranscanner.service.controllers;

import com.scranscanner.service.models.Customer;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.repositories.CustomerRepository;
import com.scranscanner.service.repositories.DinnerTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DinnerTableControllers {

    @Autowired
    DinnerTableRepository dinnerTableRepository;

    @GetMapping(value = "/dinnertables")
    public ResponseEntity<List<DinnerTable>> getAllDinnerTables(){
        return new ResponseEntity<>(dinnerTableRepository.findAll(), HttpStatus.OK);
    }

    // Show
    @GetMapping(value = "/dinnertables/{id}")
    public ResponseEntity<Optional<DinnerTable>> findDinnerTableById(@PathVariable Long id){
        return new ResponseEntity<>(dinnerTableRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/dinnertables")
    public ResponseEntity<DinnerTable> createDinnerTable(@RequestBody DinnerTable dinnerTable){
        return new ResponseEntity<>(dinnerTableRepository.save(dinnerTable), HttpStatus.CREATED);
    }

    @PutMapping(value = "/dinnertables/{id}")
    public ResponseEntity<DinnerTable> updateDinnerTable(@RequestBody DinnerTable dinnerTable, @PathVariable Long id){
        return new ResponseEntity<>(dinnerTableRepository.save(dinnerTable), HttpStatus.OK);
    }

    @DeleteMapping(value = "/dinnertables/{id}")
    public ResponseEntity<Long> deleteDinnerTable(@PathVariable Long id){
        dinnerTableRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
