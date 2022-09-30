package com.scranscanner.service.components;

import com.scranscanner.service.helpers.DateRange;
import com.scranscanner.service.models.*;
import com.scranscanner.service.repositories.*;
import com.scranscanner.service.types.PermissionType;
import com.scranscanner.service.types.PriorityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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
    @Autowired
    AvailabilityRepository availabilityRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        availabilityRepository.deleteAll();
        reviewRepository.deleteAll();
        bookingRepository.deleteAll();
        customerRepository.deleteAll();
        dinnerTableRepository.deleteAll();
        restaurantRepository.deleteAll();

        LocalDate startDate = LocalDate.of(2022,9,28);
        LocalDate endDate = LocalDate.of(2022,10,3);

        LocalTime time1 = LocalTime.of(14,0,0);
        LocalTime time2 = LocalTime.of(16,0,0);
        LocalTime time3 = LocalTime.of(18,0,0);

        List<LocalTime> times = new ArrayList<>();
        times.add(time1);
        times.add(time2);
        times.add(time3);

        List<LocalDate> dates = DateRange.getDatesBetween(startDate, endDate);

        Restaurant restaurant1 = new Restaurant("Palmyra", "palmyra@email.com", "password", PermissionType.RESTAURANT);
        restaurantRepository.save(restaurant1);
        Restaurant restaurant2 = new Restaurant("Tasty Noodles", "tastynoodles@email.com", "password", PermissionType.RESTAURANT);
        restaurantRepository.save(restaurant2);

        restaurant1.addAttribute("cuisine", "middle-eastern");
        restaurantRepository.save(restaurant1);

        DinnerTable dinnerTable1 = new DinnerTable(1, 4, PriorityType.LOW, restaurant1);
        dinnerTableRepository.save(dinnerTable1);
        List<Availability> availabilities1 = DateRange.getAvailabilities(dates, times, dinnerTable1);
        for(Availability availability: availabilities1){
            availabilityRepository.save(availability);
            dinnerTable1.addAvailability(availability);
            dinnerTableRepository.save(dinnerTable1);}

        DinnerTable dinnerTable2 = new DinnerTable(2, 2, PriorityType.HIGH, restaurant2);
        dinnerTableRepository.save(dinnerTable2);

        DinnerTable dinnerTable3 = new DinnerTable(3, 6, PriorityType.MEDIUM, restaurant1);
        dinnerTableRepository.save(dinnerTable3);
        List<Availability> availabilities2 = DateRange.getAvailabilities(dates, times, dinnerTable3);
        for(Availability availability: availabilities2){
            availabilityRepository.save(availability);
            dinnerTable3.addAvailability(availability);
            dinnerTableRepository.save(dinnerTable3);}

        Customer customer1 = new Customer("Ethan Baird", "ethan@email.com", "password", PermissionType.CUSTOMER);
        customerRepository.save(customer1);
        Customer customer2 = new Customer("Samuel Serrano Ferraro", "sam@email.com", "password", PermissionType.CUSTOMER);
        customerRepository.save(customer2);

        Booking bookingEthan = new Booking(customer1, restaurant1, dinnerTable1, 4);
        bookingRepository.save(bookingEthan);
        Booking bookingEthan2 = new Booking(customer1, restaurant2, dinnerTable2, 2);
        bookingRepository.save(bookingEthan2);

        Review reviewEthan = new Review("Ethan", 4.5, "Fabtastic", restaurant1);
        reviewRepository.save(reviewEthan);
        restaurant1.addReview(reviewEthan);
        Review reviewEthan2 = new Review("Ethan", 4, "Great, but not this morning...", restaurant1);
        reviewRepository.save(reviewEthan2);
        restaurant1.addReview((reviewEthan2));

        restaurant1.addDinnerTable(dinnerTable1);
        restaurantRepository.save(restaurant1);
        restaurant2.addDinnerTable(dinnerTable2);
        restaurantRepository.save(restaurant2);

        customer1.addBooking(bookingEthan);
        customerRepository.save(customer1);
        customer2.addBooking(bookingEthan2);
        customerRepository.save(customer2);

        restaurant1.addBooking(bookingEthan);
        restaurantRepository.save(restaurant1);
        restaurant2.addBooking(bookingEthan2);
        restaurantRepository.save(restaurant2);





    }
}
