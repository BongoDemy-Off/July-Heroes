export interface HeroData {
  id?: string;
  name: string;
  district: string;
  story: string;
  driveLink: string;
  createdAt: string;
  status?: 'pending' | 'verified';
  // New Fields
  profession?: string;
  ageGroup?: string;
  gender?: string;
  institution?: string;
  incidentDate?: string;
  cause?: string;
  politicalAffiliation?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: HeroData[];
}

export enum FormStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error'
}