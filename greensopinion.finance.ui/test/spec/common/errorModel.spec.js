/*******************************************************************************
 * Copyright (c) 2015, 2016 David Green.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
'use strict';

describe('Service: ErrorModel', function () {

  // load the controller's module
  beforeEach(module('greensopinionfinanceApp'));

  it('Should accept message',inject(function (ErrorModel) {
    var error1 = new ErrorModel('message 1');
    var error2 = new ErrorModel('message 2');
    expect(error1).toBeDefined();
    expect(error1.message).toBe('message 1');
    expect(error2).toBeDefined();
    expect(error2.message).toBe('message 2');
  }));
});
