import { entityTemplates } from '@cluedin/ui';
import * as layouts from './layouts';
import * as templates from './templates';
import * as widgets from './widgets';

const { addLayout, addTemplate, addWidget } = entityTemplates;

Object.values(layouts).forEach(addLayout);

Object.values(templates).forEach(addTemplate);

Object.values(widgets).forEach(widget => addWidget(widget.name, widget));
