import { Injectable } from '@nestjs/common';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';
import { Project } from 'src/project/entities/project.entity';
import { Shader } from 'src/shader/entities/shader.entity';
import { WorkRecord } from 'src/work-record/entities/work-record.entity';
import { StorageFacet } from './facet/storage-facet.interface';

@Injectable()
export class StorageService implements StorageFacet{

  async saveProject(id: string, data: any): Promise<void> {
    // TODO: Implement project saving logic
    throw new Error('Method not implemented.');
  }

  async getProject(id: string): Promise<Project> {
    // TODO: Implement project retrieval logic
    throw new Error('Method not implemented.');
  }

  async deleteProject(id: string): Promise<void> {
    // TODO: Implement project deletion logic
    throw new Error('Method not implemented.');
  }

  async saveShader(id: string, data: any): Promise<void> {
    // TODO: Implement shader saving logic
    throw new Error('Method not implemented.');
  }

  async getShader(id: string): Promise<Shader> {
    // TODO: Implement shader retrieval logic
    throw new Error('Method not implemented.');
  }

  async deleteShader(id: string): Promise<void> {
    // TODO: Implement shader deletion logic
    throw new Error('Method not implemented.');
  }

  async saveWorkRecord(id: string, data: any): Promise<void> {
    // TODO: Implement shader saving logic
    throw new Error('Method not implemented.');
  }

  async getWorkRecord(id: string): Promise<WorkRecord> {
    // TODO: Implement shader retrieval logic
    throw new Error('Method not implemented.');
  }

  async deleteWorkRecord(id: string): Promise<void> {
    // TODO: Implement work record deletion logic
    throw new Error('Method not implemented.');
  }

  async saveCurriculum(id: string, data: any): Promise<void> {
    // TODO: Implement shader saving logic
    throw new Error('Method not implemented.');
  }

  async getCurriculum(): Promise<Curriculum> {
    // TODO: Implement shader retrieval logic
    throw new Error('Method not implemented.');
  }

  async publishCurriculum(id: string): Promise<void> {
    // TODO: Implement shader retrieval logic
    throw new Error('Method not implemented.');
  }
}
