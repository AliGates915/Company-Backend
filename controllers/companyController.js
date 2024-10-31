// controllers/companyController.js
import CompanyInfo from '../models/CompanyInfo.js';

export const createCompany = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the request body to debug

        const companyInfo = new CompanyInfo(req.body);

        // Attempt to save the company info to the database
        const savedCompany = await companyInfo.save();

        // If saved successfully, return a success response
        console.log('Company created successfully:', savedCompany); // Log the saved company info
        return res.status(201).json({ message: 'Company created successfully!', company: savedCompany });

    } catch (error) {
        // Check for validation errors
        if (error.name === 'ValidationError') {
            console.error('Validation Error:', error.errors); // Log validation errors
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }

        // Log any other error
        console.error('Error creating company:', error); // Log the error for debugging
        return res.status(500).json({ message: 'Error creating company', error: error.message }); // Use 500 for server errors
    }
};


// Get all companies
export const getAllCompanies = async (req, res) => {
    try {
        const companies = await CompanyInfo.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching companies', error });
    }
};

// Get a single company by ID
export const getCompanyById = async (req, res) => {
    try {
        const company = await CompanyInfo.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company', error });
    }
};



// Update a company by ID
export const updateCompany = async (req, res) => {
    try {
        const updatedCompany = await CompanyInfo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(400).json({ message: 'Error updating company', error });
    }
};

// Delete a company by ID
export const deleteCompany = async (req, res) => {
    try {
        const deletedCompany = await CompanyInfo.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting company', error });
    }
};
