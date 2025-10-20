import Fuse from 'fuse.js';
import { Kit } from './schemas/kit';
import { Lesson } from './schemas/lesson';

/**
 * Create a Fuse.js search instance for kits
 */
export function createKitSearchIndex(kits: Kit[]) {
  return new Fuse(kits, {
    keys: ['name', 'description', 'skills', 'components'],
    threshold: 0.3,
  });
}

/**
 * Search kits by query
 */
export function searchKits(kits: Kit[], query: string) {
  if (!query.trim()) return kits;
  const index = createKitSearchIndex(kits);
  return index.search(query).map((result) => result.item);
}

/**
 * Create a Fuse.js search instance for lessons
 */
export function createLessonSearchIndex(lessons: Lesson[]) {
  return new Fuse(lessons, {
    keys: ['title', 'description', 'objectives', 'tags'],
    threshold: 0.3,
  });
}

/**
 * Search lessons by query
 */
export function searchLessons(lessons: Lesson[], query: string) {
  if (!query.trim()) return lessons;
  const index = createLessonSearchIndex(lessons);
  return index.search(query).map((result) => result.item);
}
