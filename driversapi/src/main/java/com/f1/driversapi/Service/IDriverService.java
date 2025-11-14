package com.f1.driversapi.Service;

import com.f1.driversapi.Entity.Drivers;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IDriverService {

    Drivers addDriver(Drivers driver);
    Drivers updateDriver(Drivers driver);
    Drivers getById(Long id);
    ResponseEntity<String> deleteById(Long id);

    List<Drivers> getAll(Sort sort);
    List<Drivers> getByName(String name);
    List<Drivers> getByTeam(String team);
    List<Drivers> getByPointsGreaterThan(double points);
    List<Drivers> getByNationality(String nationality);
    List<Drivers> getPointsRange(double low, double high);
}
