import { Injectable } from '@angular/core';
import { UserInfo } from '../interfaces/about/user-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  userInfo: UserInfo[] = [
    {
      id: 1,
      profileImage: 'assets/images/profile.png',
      userName: 'Gabriel Flores',
      userDescription: `
        Soy un desarrollador fullstack especializado en aplicativos webs. A
        mediano plazo me gustaría seguir aprendiendo diferentes tecnologías
        para ser un referente tecnológico y así apoyar a mi equipo cuando lo
        necesite.
      `,
    },
  ];

  constructor() {}
}
