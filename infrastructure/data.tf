# data "aws_caller_identity" "current" {
#   provider = aws.no-assume
# }

# data "terraform_remote_state" "dns" {
#   backend = "s3"

#   config = {
#     bucket = "terraform-main-state.${var.tier}.sothelabs.com"
#     key    = "dns-tier.sothelabs.com.tfstate"
#     region = "eu-west-1"

#     assume_role = {
#       role_arn = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:role/${var.tier}-admin-${var.service_name}"
#     }
#   }
# }

