package com.scranscanner.service.components;

import com.scranscanner.service.helpers.DataLoaderHelper;
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
import java.util.ArrayList;
import java.util.List;

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

        // these date objects are used to automate building of availability
        LocalDate startDate = LocalDate.of(2022,10,1);
        LocalDate endDate = LocalDate.of(2022,10,28);

        List<LocalDate> dates = DataLoaderHelper.getDatesBetween(startDate, endDate);

        // these time objects are used to automate building of availability
        LocalTime time1200 = LocalTime.of(12,0,0);
        LocalTime time1215 = LocalTime.of(12,15,0);
        LocalTime time1230 = LocalTime.of(12,30,0);
        LocalTime time1245 = LocalTime.of(12,45,0);

        LocalTime time1300 = LocalTime.of(13,0,0);
        LocalTime time1315 = LocalTime.of(13,15,0);
        LocalTime time1330 = LocalTime.of(13,30,0);
        LocalTime time1345 = LocalTime.of(13,45,0);

        LocalTime time1400 = LocalTime.of(14,0,0);
        LocalTime time1415 = LocalTime.of(14,15,0);
        LocalTime time1430 = LocalTime.of(14,30,0);
        LocalTime time1445 = LocalTime.of(14,45,0);

        LocalTime time1500 = LocalTime.of(15,0,0);
        LocalTime time1515 = LocalTime.of(15,15,0);
        LocalTime time1530 = LocalTime.of(15,30,0);
        LocalTime time1545 = LocalTime.of(15,45,0);

        LocalTime time1600 = LocalTime.of(16,0,0);
        LocalTime time1615 = LocalTime.of(16,15,0);
        LocalTime time1630 = LocalTime.of(16,30,0);
        LocalTime time1645 = LocalTime.of(16,45,0);

        LocalTime time1700 = LocalTime.of(17,0,0);
        LocalTime time1715 = LocalTime.of(17,15,0);
        LocalTime time1730 = LocalTime.of(17,30,0);
        LocalTime time1745 = LocalTime.of(17,45,0);

        LocalTime time1800 = LocalTime.of(18,0,0);
        LocalTime time1815 = LocalTime.of(18,15,0);
        LocalTime time1830 = LocalTime.of(18,30,0);
        LocalTime time1845 = LocalTime.of(18,45,0);

        LocalTime time1900 = LocalTime.of(19,0,0);
        LocalTime time1915 = LocalTime.of(19,15,0);
        LocalTime time1930 = LocalTime.of(19,30,0);
        LocalTime time1945 = LocalTime.of(19,45,0);

        List<LocalTime> timesfrom1200 = new ArrayList<>();
        timesfrom1200.add(time1200);
        timesfrom1200.add(time1400);
        timesfrom1200.add(time1600);
        timesfrom1200.add(time1800);

        List<LocalTime> timesfrom1215 = new ArrayList<>();
        timesfrom1215.add(time1215);
        timesfrom1215.add(time1415);
        timesfrom1215.add(time1615);
        timesfrom1215.add(time1815);

        List<LocalTime> timesfrom1230 = new ArrayList<>();
        timesfrom1230.add(time1230);
        timesfrom1230.add(time1430);
        timesfrom1230.add(time1630);
        timesfrom1230.add(time1830);

        List<LocalTime> timesfrom1245 = new ArrayList<>();
        timesfrom1245.add(time1245);
        timesfrom1245.add(time1445);
        timesfrom1245.add(time1645);
        timesfrom1245.add(time1845);

        List<LocalTime> timesfrom1300 = new ArrayList<>();
        timesfrom1300.add(time1300);
        timesfrom1300.add(time1500);
        timesfrom1300.add(time1700);
        timesfrom1300.add(time1900);

        List<LocalTime> timesfrom1315 = new ArrayList<>();
        timesfrom1315.add(time1315);
        timesfrom1315.add(time1515);
        timesfrom1315.add(time1715);
        timesfrom1315.add(time1915);

        List<LocalTime> timesfrom1330 = new ArrayList<>();
        timesfrom1330.add(time1330);
        timesfrom1330.add(time1530);
        timesfrom1330.add(time1730);
        timesfrom1330.add(time1930);

        List<LocalTime> timesfrom1345 = new ArrayList<>();
        timesfrom1345.add(time1345);
        timesfrom1345.add(time1545);
        timesfrom1345.add(time1745);
        timesfrom1345.add(time1945);

        // creates 10  unique restaurants

        Restaurant palmyra = new Restaurant(
                "Palmyra",
                "palmyra@email.com",
                "password",
                PermissionType.RESTAURANT,
                "Takeaway restaurant specialising in pizzas and Mediterranean-style wraps.",
                "https://images.unsplash.com/photo-1649138783888-0ec9c3ec2f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
        restaurantRepository.save(palmyra);

        palmyra.addAttribute("cuisine", "Mediterranean");
        palmyra.addAttribute("cuisine", "Pizza");
        palmyra.addAttribute("cuisine", "Falafel");
        palmyra.addAttribute("price", "£");

        DinnerTable palmyraTable1 = new DinnerTable(1,2,PriorityType.LOW,palmyra);
        dinnerTableRepository.save(palmyraTable1);
        List<Availability> palmyraAvailTable1 = DataLoaderHelper.getAvailabilities(dates, timesfrom1200, palmyraTable1);
        for(Availability availability: palmyraAvailTable1){
            availabilityRepository.save(availability);
            palmyraTable1.addAvailability(availability);
            dinnerTableRepository.save(palmyraTable1);}

        DinnerTable palmyraTable2 = new DinnerTable(2,4,PriorityType.MEDIUM,palmyra);
        dinnerTableRepository.save(palmyraTable2);
        List<Availability> palmyraAvailTable2 = DataLoaderHelper.getAvailabilities(dates, timesfrom1215, palmyraTable2);
        for(Availability availability: palmyraAvailTable2){
            availabilityRepository.save(availability);
            palmyraTable2.addAvailability(availability);
            dinnerTableRepository.save(palmyraTable2);}

        DinnerTable palmyraTable3 = new DinnerTable(3,6,PriorityType.HIGH,palmyra);
        dinnerTableRepository.save(palmyraTable3);
        List<Availability> palmyraAvailTable3 = DataLoaderHelper.getAvailabilities(dates, timesfrom1230, palmyraTable3);
        for(Availability availability: palmyraAvailTable3){
            availabilityRepository.save(availability);
            palmyraTable3.addAvailability(availability);
            dinnerTableRepository.save(palmyraTable3);}


//        Restaurant tastyNoodles = new Restaurant("Tasty Noodles", "tastynoodles@email.com", "password", PermissionType.RESTAURANT);
//        restaurantRepository.save(tastyNoodles);
//        Restaurant chezJules = new Restaurant("Chez Jules", "chezjules@email.com", "password", PermissionType.RESTAURANT);
//        restaurantRepository.save(chezJules);
//
//
//        DinnerTable dinnerTable1 = new DinnerTable(1, 4, PriorityType.LOW, restaurant1);
//        dinnerTableRepository.save(dinnerTable1);
//        List<Availability> availabilities1 = DataLoaderHelper.getAvailabilities(dates, timesfrom1200, dinnerTable1);
//
//
//        DinnerTable dinnerTable2 = new DinnerTable(2, 2, PriorityType.HIGH, restaurant2);
//        dinnerTableRepository.save(dinnerTable2);
//
//        DinnerTable dinnerTable3 = new DinnerTable(3, 6, PriorityType.MEDIUM, restaurant1);
//        dinnerTableRepository.save(dinnerTable3);
//        List<Availability> availabilities2 = DataLoaderHelper.getAvailabilities(dates, times, dinnerTable3);
//        for(Availability availability: availabilities2){
//            availabilityRepository.save(availability);
//            dinnerTable3.addAvailability(availability);
//            dinnerTableRepository.save(dinnerTable3);}
//
//        Customer customer1 = new Customer("Ethan Baird", "ethan@email.com", "password", PermissionType.CUSTOMER);
//        customerRepository.save(customer1);
//        Customer customer2 = new Customer("Samuel Serrano Ferraro", "sam@email.com", "password", PermissionType.CUSTOMER);
//        customerRepository.save(customer2);
//
//        Booking bookingEthan = new Booking(customer1, restaurant1, dinnerTable1, 4);
//        bookingRepository.save(bookingEthan);
//        Booking bookingEthan2 = new Booking(customer1, restaurant2, dinnerTable2, 2);
//        bookingRepository.save(bookingEthan2);
//
//        Review reviewEthan = new Review("Ethan", 4.5, "Fabtastic", restaurant1);
//        reviewRepository.save(reviewEthan);
//        restaurant1.addReview(reviewEthan);
//        Review reviewEthan2 = new Review("Ethan", 4, "Great, but not this morning...", restaurant1);
//        reviewRepository.save(reviewEthan2);
//        restaurant1.addReview((reviewEthan2));
//
//        restaurant1.addDinnerTable(dinnerTable1);
//        restaurantRepository.save(restaurant1);
//        restaurant2.addDinnerTable(dinnerTable2);
//        restaurantRepository.save(restaurant2);
//
//        customer1.addBooking(bookingEthan);
//        customerRepository.save(customer1);
//        customer2.addBooking(bookingEthan2);
//        customerRepository.save(customer2);
//
//        restaurant1.addBooking(bookingEthan);
//        restaurantRepository.save(restaurant1);
//        restaurant2.addBooking(bookingEthan2);
//        restaurantRepository.save(restaurant2);





    }
}
