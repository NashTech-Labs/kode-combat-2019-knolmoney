package models

import java.sql.Date

case class Items(
                itemId: String,
                itemName: String,
                isActive: Boolean,
                price: Float,
                storeId: String,
                createdAt: Date,
                updated: Date
                )
