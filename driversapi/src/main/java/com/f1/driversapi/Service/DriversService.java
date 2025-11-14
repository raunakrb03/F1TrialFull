package com.f1.driversapi.Service;

import com.f1.driversapi.Entity.Drivers;
import com.f1.driversapi.Exception.DriverNotFoundException;
import com.f1.driversapi.Repository.DriversRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriversService implements IDriverService {

    @Autowired
    private DriversRepo repo;

    @Override
    public Drivers addDriver(Drivers driver) {
        if (driver.getPoints() > 500) {
            throw new IllegalArgumentException("Points cannot exceed 500 for any driver.");
        }
        return repo.save(driver);
    }

    @Override
    public Drivers updateDriver(Drivers driver) {

        if (driver.getPoints() > 500) {
            throw new IllegalArgumentException("Points cannot exceed 500 for any driver.");
        }

        return repo.save(driver);

    }

    @Override
    public Drivers getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new DriverNotFoundException("Driver not found"));
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        repo.deleteById(id);
        return new ResponseEntity<>("Record deleted", HttpStatus.ACCEPTED);
    }

    @Override
    public List<Drivers> getAll(Sort sort) {
        return repo.findAll(sort);
    }

    @Override
    public List<Drivers> getByName(String name) {
        return repo.findByName(name);
    }

    @Override
    public List<Drivers> getByTeam(String team) {
        return repo.findByTeam(team);
    }

    @Override
    public List<Drivers> getByPointsGreaterThan(double points) {
        return repo.findByPointsGreaterThan(points);
    }

    @Override
    public List<Drivers> getByNationality(String nationality) {
        return repo.findByNationality(nationality);
    }

    @Override
    public List<Drivers> getPointsRange(double low, double high) {
        return repo.getPointsRange(low, high);
    }
}