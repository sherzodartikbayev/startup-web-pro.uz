import { z } from 'zod'

export const contactSchema = z.object({
	message: z.string().min(10),
	email: z.string().email(),
	name: z.string().min(3),
})

export const courseSchema = z.object({
	title: z.string().min(3),
	description: z.string().min(10),
	learning: z.string(),
	requirements: z.string(),
	level: z.string(),
	language: z.string(),
	category: z.string(),
	oldPrice: z.string().min(0),
	currentPrice: z.string().min(0),
})

export const courseFieldsSchema = z.object({
	title: z.string().min(3),
	slug: z.string().min(3),
})

export const descriptionSchema = z.object({
	description: z.string().min(10),
})

export const informationSchema = z.object({
	learning: z.string(),
	requirements: z.string(),
	tags: z.string(),
})

export const selectFieldsSchema = z.object({
	level: z.string(),
	category: z.string(),
	language: z.string(),
})

export const coursePriceSchema = z.object({
	oldPrice: z.string(),
	currentPrice: z.string(),
})

export const previewImageSchema = z.object({
	previewImage: z.string(),
})
