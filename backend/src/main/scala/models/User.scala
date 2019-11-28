package models

import java.sql.Date

case class User(userId:String,
                firstName: String,
                lastName:String,
                email:String,
                phone : Long,
                isActive: Boolean,
                isAdmin: Boolean,
                orgId: String,
                created: Date,
                updated: Date
               )
