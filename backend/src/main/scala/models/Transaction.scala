package models

import java.sql.Date

case class Transaction(transId: String,
                       transDescription: String,
                       transaction_type: Char,
                       currentBalance: Float,
                        userId: String,
                       storeId: String,
                       isApproved:String,
                       amount: Float,
                       dated: Date,
                       created: Date
                      )
