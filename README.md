
# Desafio-Backend-Cubos - Scheduling a clinic

* [Sobre](#sobre)

* [Tecnologias](#tecnologias)

* [Como usar](#Como-usar)

* [Endpoints](#endpoints)

# Sobre

Projeto requerido no processo seletivo para desenvolvedor Backend na empresa Cubos Tecnologia.

Neste desafio foi criado uma API REST para facilitar o gerenciamento de horários de uma clínica.

## Tecnologias

* [NodeJs](https://nodejs.org/en/)
* [Lowdb](https://github.com/typicode/lowdb)

## Como usar

Inialmente é necessaŕio clonar o repositório.

``` https://github.com/samuelreboucas07/Technical-Challenge-Backend-CUBOS.git ```

**Iniciar servidor** 
```
npm install 
npm start
```

## Endpoints

* /registerOnlyDate - Cadastra regra de horário para atendimento em data específica
* /registerDaily - Cadastra regra de horário para atendimento diário
* /registerWeekly -  Cadastra regra de horário para atendimento semanal
* /deleteById/:id - Exclui regra cadastrada
* /getScheduledTimes - Lista todos horários cadastrados
* /getAvailableTimesByInterval/:startDate/:endDate - Lista de horário cadastrados em um intervalo de tempo
