import { Injectable } from '@angular/core';
import { Programme } from './programme';
import { PROGRAMMES } from './mock-programmes';

@Injectable ()
export class ProgrammeService{
    getProgrammes(): Promise<Programme[]>{
        return Promise.resolve(PROGRAMMES);
    }
}