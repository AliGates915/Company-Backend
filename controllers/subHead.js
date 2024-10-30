import Head from '../models/SubHead.js';

// Use default storage
export const createSubHead = async (req, res) => {
    const { headName, headCode, companyName, companyCode, subHeadName,subHeadCode, description } = req.body;

    const newHead = new Head({ headName, subHeadCode,subHeadName, headCode, companyName, companyCode, description });
    console.log("data ",  newHead);

    try {
        const savedHead = await newHead.save();
        res.status(201).json(savedHead);
    } catch (error) {
        console.error('Error creating head:', error);
        res.status(500).json({ error: 'Error saving head' });
    }
  };

// Get all companies
export const getAllSubHead = async (req, res) => {
    try {
        const heads = await Head.find();
        res.status(200).json(heads);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving heads" });
    }
};

// Update a company by ID
export const updateSubHead = async (req, res) => {
    try {
        const updatedHead = await Head.findByIdAndUpdate(
            req.params.id,
            { headName: req.body.head },
            { new: true }
        );
        res.status(200).json(updatedHead);
    } catch (error) {
        res.status(500).json({ error: "Error updating head" });
    }
};

// Delete a company by ID
export const deleteSubHead = async (req, res) => {
    try {
        await Head.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Head deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting head" });
    }
};
