/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import BpkRouterLink from 'bpk-component-router-link';

import * as ROUTES from '../../../constants/routes';

import Web, { metadata as webMetadata } from './WebFieldsets.mdx';

import MarkdownPage from 'components/MarkdownPage';
import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';

const blurb = [
  <IntroBlurb>
    Fieldsets encapsulate the composition of{' '}
    <BpkRouterLink to={`${ROUTES.FORM}`}>form controls</BpkRouterLink>,{' '}
    <BpkRouterLink to={`${ROUTES.FORM}#labels`}>labels</BpkRouterLink>
    &nbsp;&amp;{' '}
    <BpkRouterLink to={`${ROUTES.FORM}#validation`}>
      validation messages
    </BpkRouterLink>{' '}
    with the necessary attributes to ensure good accessibility for screen
    readers.
  </IntroBlurb>,
];

const FieldsetPage = () => (
  <DocsPageWrapper
    title="Fieldset"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default FieldsetPage;
