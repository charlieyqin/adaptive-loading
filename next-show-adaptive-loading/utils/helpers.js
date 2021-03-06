/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const serializeToQueryParam = (queryObject, prefix) => {
  const queryString = [];
  for (const key in queryObject)
    if (queryObject.hasOwnProperty(key)) {
      queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key]));
    }
  return prefix ? `${prefix}?${queryString.join('&')}` : queryString.join('&');
};

const checkIsSmallViewport = () => {
  const isSmallViewport = window.matchMedia('(max-width: 767px)').matches;
  return isSmallViewport;
};

export {
  serializeToQueryParam,
  checkIsSmallViewport
};
