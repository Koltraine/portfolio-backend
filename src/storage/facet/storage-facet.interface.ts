import { Curriculum } from "src/curriculum/entities/curriculum.entity";
import { Project } from "src/project/entities/project.entity";
import { WorkRecord } from "src/work-record/entities/work-record.entity";

export interface StorageFacet {
  saveProject(id: string, data: any): Promise<void>;
  getProject(id: string): Promise<Project>;
  deleteProject(id: string): Promise<void>;
  saveShader(id: string, data: any): Promise<void>;
  getShader(id: string): Promise<any>;
  deleteShader(id: string): Promise<void>;
  saveWorkRecord(id: string, data: any): Promise<void>;
  getWorkRecord(id: string): Promise<WorkRecord>;
  deleteWorkRecord(id: string): Promise<void>;
  saveCurriculum(id: string, data: any): Promise<void>;
  getCurriculum(): Promise<Curriculum>;
  publishCurriculum(id: string): Promise<void>;
}
