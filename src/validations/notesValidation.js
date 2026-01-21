import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";
import { TAGS } from "../constants/tags.js";
// Для маршруту GET /notes потрібно валідувати параметри рядка запиту:

// page - ціле число, мінімальне значення 1, за замовчуванням 1.
// perPage - ціле число, мінімальне значення 5, максимальне 20, за замовчуванням 10.
// tag - рядок, одне із можливих значень із файла src/contacts/tags.js, необов’язкове поле
// search - рядок, можливо передавати порожній рядок

// Для цього створіть схему валідації getAllNotesSchema (не змінюйте назву) у файлі src/validations/notesValidation.js.

export const getAllNotesSchema = {
[Segments.QUERY]: Joi.object({
page: Joi.number().integer().min(1).default(1),
perPage: Joi.number().integer().min(5).max(20).default(10),
tag: Joi.string().valid(...TAGS),
search: Joi.string().trim().allow(''),
sortBy: Joi.string().valid('_id', 'tag', 'title', 'createdAt' ).default('_id'),
sortOrder: Joi.string().valid('asc', 'desc').default('asc'),
}),
};



// Для маршруту GET /notes/:noteId потрібно валідувати параметр запиту noteId:

// noteId - валідуємо як рядок із кастомною валідацію через isValidObjectId із mongoose.

// Для цього створіть схему валідації noteIdSchema (не змінюйте назву) у файлі src/validations/notesValidation.js.


// Для маршруту DELETE /notes/:noteId потрібно валідувати параметр запиту noteId:

// noteId - валідуємо як рядок із кастомною валідацію через isValidObjectId із mongoose.

// Для цього використайте схему валідації noteIdSchema (не змінюйте назву) у файлі src/validations/notesValidation.js.


// Для маршруту POST /notes потрібно валідувати тіло запиту як об’єкт із наступними властивостями:

// title - рядок, мінімум 1 символ, обов’язкове поле
// content - рядок, може бути порожнім рядком, необов’язкове поле
// tag - одне зі значень із файла src/contacts/tags.js, необов’язкове поле.

// Для цього створіть схему валідації createNoteSchema (не змінюйте назву) у файлі src/validations/notesValidation.js.


// Для маршруту PATCH /notes/:noteId потрібно валідувати параметр запиту noteId (валідуємо як рядок із кастомною валідацію через isValidObjectId із mongoose) та тіло запиту як об’єкт із наступними властивостями:

// title - рядок, мінімум 1 символ, необов’язкове поле
// content - рядок, може бути порожнім рядком, необов’язкове поле
// tag - одне із значень із файла src/contacts/tags.js, необов’язкове поле


// Додайте перевірку, що хоча б одне з полів `title`, `content` або `tag` буде присутнім, тобто тіло запиту не має бути порожнім. Для цього створіть схему валідації updateNoteSchema (не змінюйте назву) у файлі src/validations/notesValidation.js та використайте noteIdSchema.
// Зверніть увагу: обидві частини валідації (параметри маршруту та тіло запиту) потрібно реалізувати в одній схемі updateNoteSchema.
