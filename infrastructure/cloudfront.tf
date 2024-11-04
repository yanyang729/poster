# resource "aws_cloudfront_distribution" "main" {
#   viewer_certificate {
#     acm_certificate_arn = data.terraform_remote_state.dns.outputs.cert_arn_us_east_1
#     ssl_support_method  = "sni-only"
#     minimum_protocol_version = "TLSv1.2_2019"
#   }

#   origin {
#     domain_name = aws_s3_bucket.main.bucket_domain_name
#     origin_id   = aws_s3_bucket.main.id
#   }

#   aliases = ["${var.service_name}.${var.tier}.sothelabs.com"]

#   logging_config {
#     include_cookies = false
#     bucket          = "sothelabs-logs-${var.tier}.s3.amazonaws.com"
#     prefix          = "cloudfront-${var.service_name}"
#   }

#   ordered_cache_behavior {
#     allowed_methods  = ["GET", "HEAD", "OPTIONS"]
#     cached_methods   = ["GET", "HEAD", "OPTIONS"]
#     target_origin_id = aws_s3_bucket.main.id
#     path_pattern     = "/index.html"
#     min_ttl          = 0
#     default_ttl      = 0
#     max_ttl          = 0

#     forwarded_values {
#       query_string = false
#       headers      = ["Origin"]

#       cookies {
#         forward = "none"
#       }
#     }

#     compress               = true
#     viewer_protocol_policy = "redirect-to-https"
#   }

#   default_cache_behavior {
#     allowed_methods  = ["GET", "HEAD", "OPTIONS"]
#     cached_methods   = ["GET", "HEAD", "OPTIONS"]
#     target_origin_id = aws_s3_bucket.main.id

#     forwarded_values {
#       query_string = false
#       headers      = ["Origin", "User-Agent"]

#       cookies {
#         forward = "none"
#       }
#     }

#     compress               = true
#     viewer_protocol_policy = "redirect-to-https"
#   }

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }

#   custom_error_response {
#     error_code         = "404"
#     response_page_path = "/index.html"
#     response_code      = "200"
#   }

#   enabled             = true
#   is_ipv6_enabled     = true
#   default_root_object = "/index.html"

#   tags = {
#     Environment = var.tier
#     Terraformed = true
#   }
# }

