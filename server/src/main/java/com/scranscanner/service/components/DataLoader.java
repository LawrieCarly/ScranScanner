package com.scranscanner.service.components;

import com.scranscanner.service.models.*;
import com.scranscanner.service.repositories.*;
import com.scranscanner.service.types.PermissionType;
import com.scranscanner.service.types.PriorityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    DinnerTableRepository dinnerTableRepository;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        bookingRepository.deleteAll();
        customerRepository.deleteAll();
        dinnerTableRepository.deleteAll();
        restaurantRepository.deleteAll();
        reviewRepository.deleteAll();

        Restaurant restaurant1 = new Restaurant("Palmyra", "palmyra@email.com", "password", PermissionType.RESTAURANT);
        restaurantRepository.save(restaurant1);
        Restaurant restaurant2 = new Restaurant("Tasty Noodles", "tastynoodles@email.com", "password", PermissionType.RESTAURANT);
        restaurantRepository.save(restaurant2);

        restaurant1.addAttribute("cuisine", "middle-eastern");
        restaurantRepository.save(restaurant1);

        DinnerTable dinnerTable1 = new DinnerTable(1, 4, PriorityType.LOW, restaurant1);
        dinnerTableRepository.save(dinnerTable1);
        DinnerTable dinnerTable2 = new DinnerTable(2, 2, PriorityType.HIGH, restaurant2);
        dinnerTableRepository.save(dinnerTable2);

        Customer customer1 = new Customer("Ethan Baird", "ethan@email.com", "password", PermissionType.CUSTOMER);
        customerRepository.save(customer1);
        Customer customer2 = new Customer("Samuel Serrano Ferraro", "sam@email.com", "password", PermissionType.CUSTOMER);
        customerRepository.save(customer2);

        Booking bookingEthan = new Booking(customer1, restaurant1, dinnerTable1, 4);
        bookingRepository.save(bookingEthan);
        Booking bookingSam = new Booking(customer2, restaurant2, dinnerTable2, 2);
        bookingRepository.save(bookingSam);

        Review reviewEthan = new Review("Ethan", 4.5, "Fabtastic", restaurant1);
        reviewRepository.save(reviewEthan);
        restaurant1.addReview(reviewEthan);
        Review reviewSam = new Review("Sam", 4, "Great, but not this morning...", restaurant2);
        reviewRepository.save(reviewSam);
        restaurant2.addReview((reviewSam));

        restaurant1.addDinnerTable(dinnerTable1);
        restaurantRepository.save(restaurant1);
        restaurant2.addDinnerTable(dinnerTable2);
        restaurantRepository.save(restaurant2);

        customer1.addBooking(bookingEthan);
        customerRepository.save(customer1);
        customer2.addBooking(bookingSam);
        customerRepository.save(customer2);

        restaurant1.addBooking(bookingEthan);
        restaurantRepository.save(restaurant1);
        restaurant2.addBooking(bookingSam);
        restaurantRepository.save(restaurant2);





    }
}
