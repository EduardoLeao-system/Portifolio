package com.portifolio.backend.service;

import com.portifolio.backend.model.Projeto;
import com.portifolio.backend.repository.ProjetoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjetoService {
    
    @Autowired
    private ProjetoRepository repository;
    
    public List<Projeto> listarTodos() {
        return repository.findAll();
    }
    
    public Optional<Projeto> buscarPorId(Long id) {
        return repository.findById(id);
    }
    
    public Projeto salvar(Projeto projeto) {
        return repository.save(projeto);
    }
    
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}