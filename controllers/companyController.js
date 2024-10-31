// controllers/companyController.js
import CompanyInfo from '../models/CompanyInfo.js';

export const createCompany = async (req, res) => {
    try {
        // Validate companyCode
        if (!req.body.companyCode) {
          return res.status(400).json({ message: 'companyCode is required.' });
        }
    
        // Check if the companyName already exists
        const existingCompany = await CompanyInfo.findOne({ companyName: req.body.companyName });
        if (existingCompany) {
          return res.status(400).json({ message: 'Company already exists.' });
        }
    
        const newCompany = new CompanyInfo(req.body);
        const savedCompany = await newCompany.save();
        
        console.log('Success created!');
        res.status(201).json(savedCompany);
      } catch (error) {
        console.error(error); // Log error details for debugging
        res.status(400).json({ message: error.message });
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
