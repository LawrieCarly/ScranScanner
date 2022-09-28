package com.scranscanner.service.controllers;

import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Review;
import com.scranscanner.service.repositories.DinnerTableRepository;
import com.scranscanner.service.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(value = "/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    // Show
    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<Optional<Review>> findReviewById(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/reviews")
    public ResponseEntity<Review> createReview(@RequestBody Review review){
        return new ResponseEntity<>(reviewRepository.save(review), HttpStatus.CREATED);
    }

    @PutMapping(value = "/reviews/{id}")
    public ResponseEntity<Review> updateReview(@RequestBody Review review, @PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.save(review), HttpStatus.OK);
    }

    @DeleteMapping(value = "/reviews/{id}")
    public ResponseEntity<Long> deleteReview(@PathVariable Long id){
        reviewRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
