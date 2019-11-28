package models

import java.sql.Date

case class TransactionDetails(transactionId: String,
                              itemId: String,
                              transactionDate: Date,
                              quantity: Int,
                              transactionAmount: Int
                             )
