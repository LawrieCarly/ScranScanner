package com.scranscanner.service.components;

import com.scranscanner.service.models.Customer;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Restaurant;
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


        DinnerTable dinnerTable1 = new DinnerTable(1, 4, PriorityType.LOW);
        dinnerTableRepository.save(dinnerTable1);
        DinnerTable dinnerTable2 = new DinnerTable(2, 2, PriorityType.HIGH);
        dinnerTableRepository.save(dinnerTable2);

        Restaurant restaurant1 = new Restaurant("Palmyra", "palmyra@email.com", "password", PermissionType.RESTAURANT);
        restaurantRepository.save(restaurant1);
        Restaurant restaurant2 = new Restaurant("Tasty Noodles", "tastynoodles@email.com", "password", PermissionType.RESTAURANT);
        restaurantRepository.save(restaurant2);

        Customer customer1 = new Customer("Ethan Baird", "ethan@email.com", "password", PermissionType.CUSTOMER);





    }
}
