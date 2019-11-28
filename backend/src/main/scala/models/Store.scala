package models

import java.sql.Date

case class Store(
                storeId: String,
                storeName: String,
                isActive: Boolean,
                qrCode: String,
                orgId: String,
                created: Date,
                )
