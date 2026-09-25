import { createAction, props } from '@ngrx/store';

export const SetName = createAction('app/SetName', props<{ name: string }>());
export const SetTel = createAction('app/SetTel', props<{ tel: string }>());
