import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findAll = async (req, res) => {
    try {
        const students = await prisma.student.findMany()
        res.json({
            ok: true,
            data: students,
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message,
        })
    }
}

export const createStudent = async (req, res) => {
    const { name, lastname, email, dni, address, phone, status } = req.body
    try {
        const student = await prisma.student.create({
            data: {
                name,
                lastname,
                email,
                dni,
                address,
                phone,
                status,
            },
        })
        res.json({
            ok: true,
            data: student,
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message,
        })
    }
}

export const editarStudent = async (req, res) => {
    const { id } = req.params
    const { name, lastname, email, dni, address, phone, status } = req.body
    try {
        const student = await prisma.student.update({
            where: {
                id,
            },
            data: {
                name,
                lastname,
                email,
                dni,
                address,
                phone,
                status,
            },
        })
        res.json({
            ok: true,
            data: student,
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message,
        })
    }
}

export const getStudent = async (req, res) => {
    const { id } = req.params
    try {
        const student = await prisma.student.findUnique({
            where: {
                id,
            },
        })
        res.json({
            ok: true,
            data: student,
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message,
        })
    }
}

export const eliminarStudent = async (req, res) => {
    const { id } = req.params
    try {
        await prisma.student.delete({
            where: {
                id,
            },
        })
        res.json({
            message: 'Estudiante eliminado de la existencia',
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message,
        })
    }
}