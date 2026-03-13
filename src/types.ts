/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  fullDescription?: string;
  benefits?: string[];
  features?: string[];
  detailedExplanation?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
}
