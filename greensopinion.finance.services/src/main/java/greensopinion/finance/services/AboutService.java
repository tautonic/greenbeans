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
package greensopinion.finance.services;

import greensopinion.finance.services.web.model.About;

public class AboutService {

	public About getAbout() {
		return new About(getApplicationName(), getCopyrightNotice());
	}

	private String getApplicationName() {
		return GreenBeans.APP_NAME;
	}

	private String getCopyrightNotice() {
		return "Copyright (c) 2015, 2016 David Green. All rights reserved.";
	}
}
