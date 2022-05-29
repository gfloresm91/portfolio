import { Injectable } from '@angular/core';
import { Client } from '../interfaces/about/client.interface';
import { Recomendation } from '../interfaces/about/recomendation.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  clients: Client[] = [
    {
      id: 1,
      name: 'Genesys',
      logo: 'assets/images/logos/genesys-logo.png',
      fixLogo: false,
    },
    {
      id: 2,
      name: 'Impact',
      logo: 'assets/images/logos/impact-logo.jpg',
      fixLogo: true,
    },
    {
      id: 3,
      name: 'ValoraLabs',
      logo: 'assets/images/logos/valoralabs-logo.jpg',
      fixLogo: false,
    },
  ];

  recomendations: Recomendation[] = [
    {
      id: 1,
      message: `
        Excelente profesional comprometido, eficaz y aprueba de retos.
        Realizamos la primera experiencia de trabajo 100% remoto con él y
        fue todo un éxito en ValoraLabs. Considero que Gabriel cumple con
        creces sus metas y objetivos tanto profesionales como personales.
        Lo que más me gustaba de él era su capacidad de analizar las cosas
        y aportar de manera pro-activa con críticas constructivas en
        nuestra retrospectivas de SPRINT. No duden en requerir sus
        servicios, no se arrepentirán.
      `,
      link: 'https://www.linkedin.com/in/gabrielfloresmonsalve',
      colaboratorData: [
        {
          id: 1,
          idRecomendation: 1,
          name: 'Jonathan Ramírez Medina, ValoraLabs',
          image: 'assets/images/clients/jonathan - valoralabs.jpg',
          job: 'Coordinador general',
        },
      ],
    },
    {
      id: 2,
      message: `
        Gabriel es un profesional que ha demostrado mucha disciplina,
        además de tener una gran capacidad para resolver problemas y
        entregar soluciones. Tiene motivación y sobre todo es capaz de
        descubrir, investigar y aportar para el buen curso de los
        servicios y proyectos en donde ha sido asignado. Es un profesional
        que aporta y trabaja bien en equipo.
      `,
      link: 'https://www.linkedin.com/in/gabrielfloresmonsalve',
      colaboratorData: [
        {
          id: 1,
          idRecomendation: 2,
          name: 'Jose Luis Puchi',
          image: 'assets/images/clients/jose - genesys.jpg',
          job: 'Gerente, Genesys',
        },
      ],
    },
  ];

  constructor() {}
}
