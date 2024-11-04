# provider "aws" {
#   region = var.region

#   assume_role {
#     role_arn = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:role/${var.tier}-admin-${var.service_name}"
#   }
# }

# provider "aws" {
#   alias = "no-assume"
# }
