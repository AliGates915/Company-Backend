
import AccountHead from "../models/AccountHead.js";
import mongoose from "mongoose";

// Create a new Account Head
export const createAccountHead = async (req, res) => {
    try {
        const accountHead = new AccountHead(req.body);
        const savedAccountHead = await accountHead.save();
        res.status(201).json(savedAccountHead);
        res.status(201).json({ message: 'Account Head created successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Account Heads
export const getAccountHeads = async (req, res) => {
    try {
        const accountHeads = await AccountHead.find();
        res.status(200).json(accountHeads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific Account Head by ID
export const getAccountHeadById = async (req, res) => {
    try {
        const accountHead = await AccountHead.findById(req.params.id);
        res.status(200).json(accountHead);
    } catch (error) {
        res.status(404).json({ message: "Account Head not found" });
    }
};

// Update Account Head
export const updateAccountHead = async (req, res) => {
    try {
        const updatedAccountHead = await AccountHead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedAccountHead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Account Head
export const deleteAccountHead = async (req, res) => {
    try {
        await AccountHead.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Account Head deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
