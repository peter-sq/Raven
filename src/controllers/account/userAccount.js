import { generateAccountNumber } from "../../utils/accountUtils.js";
import knex from "knex";
import db from '../../../db/knex.js';


const createAccount = async (req, res) => {
    try {
      const { user_id } = req.body;
      console.log("User ID:", user_id);
  
      // Check if user already has an account
      const existingAccount = await db("accounts").where({ user_id }).first();
      if (existingAccount) {
        return res.status(400).json({ message: "User already has an account." });
      }
  
      // Generate unique account number
      const accountNumber = generateAccountNumber();
  
      // Insert the account into the database
      const [accountId] = await db("accounts").insert({
        user_id,
        account_number: accountNumber,
        balance: 0.0,
        status: "active",
      });
  
      res.status(201).json({
        message: "Account created successfully",
        accountId,
        accountNumber,
      });
    } catch (error) {
      console.error("Error creating account", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };


export default createAccount;