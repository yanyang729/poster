# resource "aws_route53_record" "main" {
#   zone_id = data.terraform_remote_state.dns.outputs.main_zone_id
#   name    = "${var.service_name}.${var.tier}.sothelabs.com"
#   type    = "A"

#   alias {
#     name                   = aws_cloudfront_distribution.main.domain_name
#     zone_id                = aws_cloudfront_distribution.main.hosted_zone_id
#     evaluate_target_health = false
#   }
# }

