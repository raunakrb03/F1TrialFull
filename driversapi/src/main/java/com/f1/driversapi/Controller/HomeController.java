package com.f1.driversapi.Controller;

import com.f1.driversapi.Entity.Drivers;
import com.f1.driversapi.Service.IDriverService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/f1")
public class HomeController {

    @Autowired
    private IDriverService service;

    @PostMapping("/add")
    public Drivers addDriver(@Valid @RequestBody Drivers driver) {
        return service.addDriver(driver);
    }

    @PutMapping("/update")
    public Drivers updateDriver(@Valid @RequestBody Drivers driver) {
        return service.updateDriver(driver);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<Void> deleteDriver(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
    @GetMapping("/getById/{id}")
    public Drivers getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping("/getAll")
    public List<Drivers> getAll() {
        return service.getAll(Sort.by(Sort.Direction.DESC, "points"));
    }

    @GetMapping("/getByTeam/{team}")
    public List<Drivers> getByTeam(@PathVariable String team) {
        return service.getByTeam(team);
    }

    @GetMapping("/getByPointsGreaterThan/{points}")
    public List<Drivers> getByPointsGreaterThan(@PathVariable double points) {
        return service.getByPointsGreaterThan(points);
    }

    @GetMapping("/getByPointsRange/{low}/{high}")
    public List<Drivers> getPointsRange(@PathVariable double low, @PathVariable double high) {
        return service.getPointsRange(low, high);
    }

    @GetMapping("/getByNationality/{nationality}")
    public List<Drivers> getByNationality(@PathVariable String nationality) {
        return service.getByNationality(nationality);
    }
}
