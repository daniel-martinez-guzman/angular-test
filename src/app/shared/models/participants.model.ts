import { AttributesModel } from './attributes.model';

export type ParticipantsModel = {
  id: string;
  type: string;
  attributes: AttributesModel;
};
