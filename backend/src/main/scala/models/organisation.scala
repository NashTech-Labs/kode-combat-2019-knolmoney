package models

import java.sql.Date

case class organisation(orgId: String,
                        name: String,
                        created: Date,
                        updated: Date)
