package com.portifolio.backend.controller;

import com.portifolio.backend.model.Projeto;
import com.portifolio.backend.service.ProjetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projetos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjetoController {
    
    @Autowired
    private ProjetoService service;
    
    @GetMapping
    public List<Projeto> listar() {
        return service.listarTodos();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Projeto> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public Projeto criar(@RequestBody Projeto projeto) {
        return service.salvar(projeto);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Projeto> atualizar(@PathVariable Long id, @RequestBody Projeto projeto) {
        return service.buscarPorId(id)
                .map(p -> {
                    projeto.setId(id);
                    return ResponseEntity.ok(service.salvar(projeto));
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (service.buscarPorId(id).isPresent()) {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}